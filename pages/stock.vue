<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Stock</h1>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="item in stockItems" :key="item.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ item.product }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.quantity }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span :class="{'px-2 inline-flex text-xs leading-5 font-semibold rounded-full': true, 'bg-green-100 text-green-800': item.status === 'In Stock', 'bg-red-100 text-red-800': item.status === 'Low Stock'}">
                {{ item.status }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Update</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const stockItems = ref([
  { id: 1, product: 'Rose Plant', quantity: 50, status: 'In Stock' },
  { id: 2, product: 'Sunflower Seeds', quantity: 10, status: 'Low Stock' },
  { id: 3, product: 'Tomato Seedlings', quantity: 75, status: 'In Stock' },
]);

onMounted(() => {
  // Fetch stock items from API
});
</script>