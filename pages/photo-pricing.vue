<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Photo Pricing</h1>
    <div class="mb-4">
      <input type="file" accept="image/*" capture="camera" @change="handleImageUpload" ref="fileInput" class="hidden" />
      <button @click="captureImage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Capture Image
      </button>
    </div>
    <div v-if="imageUrl" class="mb-4">
      <img :src="imageUrl" alt="Captured image" class="max-w-full h-auto" />
    </div>
    <div v-if="prediction" class="mb-4">
      <h2 class="text-xl font-semibold">Prediction:</h2>
      <p>{{ prediction.className }}</p>
      <p>Confidence: {{ (prediction.probability * 100).toFixed(2) }}%</p>
      <p>Estimated Price: ${{ estimatedPrice.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

const fileInput = ref(null);
const imageUrl = ref(null);
const prediction = ref(null);
const estimatedPrice = ref(0);
let model;

onMounted(async () => {
  await tf.ready();
  model = await mobilenet.load();
});

const captureImage = () => {
  fileInput.value.click();
};

const handleImageUpload = async (event) => {
  const file = event.target.files[0];
  if (file) {
    imageUrl.value = URL.createObjectURL(file);
    await classifyImage();
  }
};

const classifyImage = async () => {
  if (!model) return;

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = imageUrl.value;
  await img.decode();

  const tfImg = tf.browser.fromPixels(img);
  const resizedImg = tf.image.resizeBilinear(tfImg, [224, 224]);
  const expandedImg = resizedImg.expandDims(0);
  const normalizedImg = expandedImg.div(255);

  const predictions = await model.classify(normalizedImg);
  prediction.value = predictions[0];

  // Simple price estimation based on confidence
  estimatedPrice.value = prediction.value.probability * 100;

  tfImg.dispose();
  resizedImg.dispose();
  expandedImg.dispose();
  normalizedImg.dispose();
};
</script>