<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Sales Overview</h2>
        <LineChart :chart-data="salesChartData" />
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Top Products</h2>
        <BarChart :chart-data="topProductsChartData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Line as LineChart, Bar as BarChart } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, BarElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, BarElement);

const salesChartData = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      backgroundColor: '#3490dc',
      data: [40, 39, 10, 40, 39, 80],
    },
  ],
});

const topProductsChartData = ref({
  labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
  datasets: [
    {
      label: 'Units Sold',
      backgroundColor: '#38c172',
      data: [50, 45, 40, 35, 30],
    },
  ],
});

onMounted(() => {
  // Fetch real data from API and update chart data
});
</script>