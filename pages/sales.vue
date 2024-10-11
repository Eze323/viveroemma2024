<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Sales</h1>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="sale in sales" :key="sale.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ sale.orderId }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ sale.customer }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ sale.date }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ sale.total }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span :class="{'px-2 inline-flex text-xs leading-5 font-semibold rounded-full': true, 'bg-green-100 text-green-800': sale.status === 'Completed', 'bg-yellow-100 text-yellow-800': sale.status === 'Pending'}">
                {{ sale.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const sales = ref([
  { id: 1, orderId: 'ORD001', customer: 'Alice Johnson', date: '2023-04-15', total: '$125.99', status: 'Completed' },
  { id: 2, orderId: 'ORD002', customer: 'Bob Smith', date: '2023-04-16', total: '$89.50', status: 'Pending' },
  { id: 3, orderId: 'ORD003', customer: 'Carol Williams', date: '2023-04-17', total: '$210.75', status: 'Completed' },
]);

onMounted(() => {
  // Fetch sales from API
});
</script>