<template>
  <div class="container">
    <i-row>
      <i-col span="22" offset="1" i-class="delete">
        <i-icon type="trash" size="30"/>
      </i-col>
    </i-row>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },

  components: {
  },

  methods: {
  },

  created () {
  }
}
</script>

<style scoped>

</style>
<style>
  .delete > i-icon {
    float: right;
    line-height: 40px;
  }
</style>
