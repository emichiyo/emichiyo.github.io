<template>
  <FlexBox column>
    <img src="../assets/outer-space.jpg" alt="space" :style="imageCSS"/>
  </FlexBox>
  <!-- <img src="../assets/ellie.jpg" alt="The girl" width="400"/> -->
  <!-- <p>Wow! Isn't she beautiful?</p> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FlexBox from "../components/FlexBox.vue";
import jQuery from "jquery";

export default defineComponent({
  name: 'Hello World',
  components: {
    FlexBox,
  },
  props: {
    msg: String 
  },
  computed: {
    imageCSS() {
      // const height = $(window).innerHeight();
      // const is_mobile = (height < 850);

      // const margins = (is_mobile)
      //   ? '-10%'
      //   : '0px'; 

      // const h = jQuery('#app').innerHeight() as number;

      return { 
        width: '100%',
        // height: `${h - 232 - 80}px`,
        height: `${70}vh`
        // margin-left: margins,
        // margin-right: margins,
      };
    }
  }
});
</script>

<style>
img {
  object-fit: cover;
}
</style>