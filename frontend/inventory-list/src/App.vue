<script setup>
import NavBarComponent from "@/components/NavBarComponent.vue";
</script>

<template>
  <head>
    <link rel="icon">
    <title>EDM's Inventory</title>
  </head>
  <body>
    <NavBarComponent></NavBarComponent>
    <RouterView></RouterView>
  </body>
</template>

<style scoped></style>
