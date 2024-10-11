<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Suppliers</h1>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="supplier in suppliers" :key="supplier.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ supplier.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ supplier.contact }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ supplier.email }}</td>
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

const suppliers = ref([
  { id: 1, name: 'Green Thumb Nursery', contact: 'John Doe', email: 'john@greenthumb.com' },
  { id: 2, name: 'Seed Specialists', contact: 'Jane Smith', email: 'jane@seedspecialists.com' },
  { id: 3, name: 'Organic Growers Co.', contact: 'Bob Johnson', email: 'bob@organicgrowers.com' },
]);

onMounted(() => {
  // Fetch suppliers from API
});
</script>