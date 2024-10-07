<template>
  <dashboard :Imagin="Imagin" />
</template>

<script>
import Vue from 'vue'
import Imagin from '@Imagin/core'
import { Dashboard } from '@Imagin/vue'

export default {
  name: 'App',
  components: {
    Dashboard,
  },
  computed: {
    Imagin: () => new Imagin(),
  },
}
</script>

<style src="@Imagin/core/dist/style.css"></style>
<style src="@Imagin/dashboard/dist/style.css"></style>
