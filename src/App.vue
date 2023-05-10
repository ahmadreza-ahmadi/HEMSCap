<script setup>
import Header from '@components/HeaderComp.vue';
import DailyActivity from '@components/DailyActivity.vue';
import PackageInventory from '@components/PackageInventory.vue';
import EvaluationPhysiotherapist from '@components/EvaluationPhysiotherapist.vue';
import '@/assets/style.css';
import '@/assets/global.css';
</script>

<template>
  <!-- Wrapper -->
  <div class="wrapper flex flex-col w-screen h-screen overflow-auto bg-background">
    <!-- Background -->
    <div class="hidden sm:inline-block bg-blue-200 h-[25vh] w-screen sm:-mb-10">
      <img
        src="./assets/images/background.png"
        alt="background"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="container flex flex-col gap-4 sm:gap-6 px-3 py-4 sm:px-6 sm:py-0">
      <!-- Header -->
      <Header />
      <main class="sections-wrapper">
        <DailyActivity />
        <PackageInventory />
        <EvaluationPhysiotherapist />
      </main>
    </div>
  </div>
</template>
