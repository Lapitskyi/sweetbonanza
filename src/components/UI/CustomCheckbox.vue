<template>
  <div class="flex items-start gap-x-2 relative">
    <input
        id="inline-checkbox"
        type="checkbox"
        :checked="modelValue"
        @input="updateInput"
        class="relative w-full max-w-[18px] h-[18px] focus:outline-none border border-primary-gray
        rounded-sm checked:bg-primary-gold checked:border-primary-gold appearance-none peer
        hover:border-primary-gold bg-transparent after:content-none after:checked:content-[''] after:w-full after:h-full after:absolute
        after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-done after:bg-contain"
    >
    <label
        class="select-none"
        for="inline-checkbox">
      <slot></slot>
    </label>

    <span v-if="isValid.flag"
          class="w-max p-1 bg-secondary-dark text-center absolute -top-5 left-0 text-2.5 text-primary-red">
      {{ isValid.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "CustomCheckbox",
  props: {
    modelValue: [Boolean],
    isValid: {
      flag: false,
      text: ''
    },
  },
  setup(props, {emit}){
    const updateInput = (event) => {
      emit("update:modelValue", event.target.checked);
      emit('validate');
    }
    return{
      updateInput
    }
  }
}
</script>


<style scoped>

</style>