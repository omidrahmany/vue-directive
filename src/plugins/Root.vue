<template>
  <v-container>
    <v-card class="py-5 px-5">
      <v-row>
        <v-col cols="12">
          <h1 style="text-align: center">Built-in Directives</h1>
          <hr>
          <p v-text="'some text'"></p>
          <p v-html="'<strong>some strong text</strong>'"></p>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="py-5 px-5 mt-5">
      <v-row>
        <v-col cols="12">
          <h1 style="text-align: center">Custom Directives</h1>
          <hr>
          <p v-highlight:background.delayed="'blue'">color my background to blue</p>
          <p v-local-highlight:background.delayed.blink="{mainColor:'red', secondColor:'green', delay:1000}">color my background to red </p>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "appRoot",
  directives: {
    "local-highlight": {
      bind: ((el, binding) => {
        let delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers['blink']) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = binding.value.delay;
          setTimeout(() => {
            setInterval(() => {
              currentColor = currentColor === secondColor ? mainColor : secondColor;
              if (binding.arg === "background") {
                el.style.background = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000)
          }, delay)
        } else {
          setTimeout(() => {
            if (binding.arg === 'background') {
              el.style.background = binding.value;
            } else {
              el.style.color = binding.value
            }
          }, delay)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
