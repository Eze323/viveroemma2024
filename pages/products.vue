<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Products</h1>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="product in products" :key="product.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ product.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ product.price }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ product.stock }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const products = ref([
  { id: 1, name: 'Rose Plant', price: '$9.99', stock: 50 },
  { id: 2, name: 'Sunflower Seeds', price: '$4.99', stock: 100 },
  { id: 3, name: 'Tomato Seedlings', price: '$3.99', stock: 75 },
]);

onMounted(() => {
  // Fetch products from API
});
</script>