<script setup lang="ts">
import IconInvoice from '@/components/icons/IconInvoice.vue'
import BrdButton from '../components/BrdButton.vue'
import { useWorkflowStore } from '@/stores/workflow'

const store = useWorkflowStore()
console.log(store.workflow)

const onNext = () => {
  console.log('next')
}
</script>

<template>
  <main>
    <div class="mt-8 flex flex-row justify-between">
      <div>
        <h1 class="font-semibold">Workflow {{ $route.params.id }}</h1>
        <h2 class="font-semibold mt-4">Step 1: Invoice Draft</h2>
      </div>
      <div>
        <BrdButton :title="`Step 2: Invoice Approved`" :onClick="onNext" />
      </div>
    </div>
    <div class="flex flex-row justify-between mt-16">
      <div class="flex flex-col">
        <h4>Where will you be sending the data from</h4>
        <div class="mt-8">
          <BrdButton :title="`+ Add Input`" :onClick="onNext" />
        </div>
        <!-- Start -->

        <!-- End -->
        <div class="border w-52 h-52 p-3 rounded flex flex-col justify-between">
          <div class="text-sm">
            <p>API KEY: abcde</p>
            <p>Module: abcde</p>
          </div>
          <a href="#" class="text-blue-400 text-sm">How to integrate with xero</a>
        </div>
      </div>
      <IconInvoice class="w-64" />
      <div class="flex flex-col">
        <h4>What happens when an invoice is created as draft</h4>
        <div class="mt-8">
          <BrdButton :title="`+ Add Output`" :onClick="onNext" />
        </div>
        <!-- Start -->

        <!-- End -->
      </div>
    </div>
  </main>
</template>
