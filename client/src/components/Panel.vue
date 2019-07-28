<template>
  <v-layout>
    <v-flex>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>{{title}}</v-toolbar-title>

          <slot name="action" />
        </v-toolbar>
        <slot>
        </slot>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    props: [
        'title'
    ]
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
