<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 bg-modal backdrop-blur flex z-50 "
       v-if="showModal"
  >
    <div class="relative m-auto scrollCustom p-5 scroll-auto overflow-auto h-full max-h-[800px] ">
      <div class="min-h-[50px] min-w-[300px] ">
        <button
            @click.stop="$emit('closeModal')"
            class="z-50 sm:w-10 sm:h-10 w-6 h-6 rounded-lg	bg-dark flex flex-col justify-center items-center absolute right-8 top-8"
        >
          <img class="sm:w-3.5 sm:h-3.5 w-2 h-2" src="/images/icons/close.svg" alt="x">
        </button>
        <slot></slot>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: "Modal",
  props: {
    showModal: [Boolean]
  },
  emits: ['closeModal']
}
</script>
