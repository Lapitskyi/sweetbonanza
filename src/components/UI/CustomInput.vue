<template>
  <div class="w-full  relative">
    <label v-if="modelValue" :for='label'
           class="absolute -top-4 left-3 text-sm text-snow bg-secondary-dark p-1">
      {{ label }}
    </label>
    <img
        v-if="img"
        class="w-4 h-4 absolute top-1/2 left-3 -translate-y-1/2"
        :src="img" alt=""
    >

    <img
        @click="toggleType"
        v-if="typeInput==='password'"
        class="w-6 h-6 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
        :src="type==='text' ? '/images/icons/eye.svg': '/images/icons/hide.svg'" alt=""
    >

    <input
        :value="modelValue"
        @input="updateInput"
        :type='type'
        :id='label'
        :placeholder="$attrs.placeholder"
        autocomplete="off"
        class="w-full bg-transparent border pl-9 py-4 pr-9 rounded-lg text-white outline-none"
    >
    <span v-if="isValid.flag"
          class="w-max p-1 bg-secondary-dark text-center absolute -bottom-2.5 right-3 text-2.5 text-primary-red">
      {{ isValid.text }}
    </span>

  </div>
</template>


<script>
import {ref} from "vue";

export default {
  name: "CustomInput",
  props: {
    modelValue: [String, Number],
    label: [String],
    img: [String],
    isValid: {
      flag: false,
      text: ''
    },
    typeInput: [String],
  },

  setup(props, {emit}) {
    let type = ref(props.typeInput === 'password' ? 'password' : 'text');
    const toggleType = () => {
      (props.typeInput === 'password' && type.value === 'password')
          ? type.value = 'text'
          : type.value = 'password'
    }

    const updateInput = (event) => {
      emit("update:modelValue", event.target.value);
      emit('validate');
    }
    return {
      toggleType,
      type, updateInput
    }
  },
}
</script>
