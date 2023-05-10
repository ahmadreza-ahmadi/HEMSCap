<script setup>
import Header from '@components/HeaderComp.vue';
import DailyActivity from '@components/DailyActivity.vue';
import PackageInventory from '@components/PackageInventory.vue';
import EvaluationPhysiotherapist from '@components/EvaluationPhysiotherapist.vue';
import '@/assets/css/style.css';
import '@/assets/css/global.css';
</script>

<template>
  <!-- Wrapper -->
  <div class="wrapper flex flex-col w-screen h-screen overflow-auto bg-background">
    <!-- Background -->
    <div class="w-screen -mb-[42px]">
      <img
        src="./assets/images/background.png"
        alt="background"
        class="w-full h-[10vh] sm:h-[25vh] object-cover object-right overflow-hidden rounded-b-2xl"
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
