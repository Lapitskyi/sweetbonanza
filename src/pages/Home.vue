<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 w-full h-full">
    <div class="bg-primary-dark relative">
      <div
          class="grid w-full max-w-full md:max-w-[544px] md:justify-items-start justify-items-center text-center md:text-start justify-center mx-auto gap-y-6 sm:gap-y-10 md:gap-y-13.5 pb-32 pt-14 sm:pt-37">
        <logo class="w-[142px] h-[21px] sm:w-[235px] sm:h-[35px]"/>
        <h1 class="mt-6 sm:mt-0 text-white uppercase text-2xl sm:text-4xl md:text-5xl lg:text-6xl lg:leading-18">
          Deposit 500,
          <p class="inline-block sm:block">get 500 USDT </p>
          <p class="text-primary-gold"> as a gift</p>
        </h1>
        <p class="uppercase text-primary-gray">100% cashback for VIPs only</p>
        <button
            @click="showModal = true"
            class="mt-6 sm:mx-0 mx-auto flex uppercase bg-primary-gold hover:bg-white text-primary-dark text-base md:text-xl leading-6 w-max py-4 px-14 rounded-14 font-bold ">
          Become a vip-player
        </button>

      </div>
      <div v-for="item in images2" :key='item.id' :class='item.classImg'>
        <img class="inline-flex w-full h-full" :src='item.src' :alt='item.alt'>
      </div>
    </div>

    <div
        class="relative after:content-[''] after:absolute after:z-min1 after:w-full after:h-full after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-home-bg after:bg-no-repeat after:bg-center sm:after:bg-cover">
      <div v-for="item in images" :key='item.id' :class='item.classImg'>
        <img class="inline-flex w-full h-full" :src='item.src' :alt='item.alt'>
      </div>
    </div>
  </section>
  <modal v-if="showModal" :show-modal="showModal" @closeModal="showModal=false">
    <Registration @closeModal="showModal=false"/>
  </modal>
</template>

<script>
import Logo from "@/components/Logo.vue";
import Modal from "@/components/Modal.vue";
import Registration from "@/components/Registration.vue";
import {ref} from "vue";

export default {
  name: "Home",
  components: {Registration, Modal, Logo},
  setup() {
    const showModal = ref(false)

    const images = [
      {
        id: 1,
        src: '/images/home/image_1.png',
        alt: 'sweet bonanza',
        classImg: ' max-w-[113px] md:max-w-[150px] lg:max-w-[217px] z-2 absolute top-12 sm:top-31.25 left-1/2 -translate-x-1/2'
      },
      {
        id: 2,
        src: '/images/home/image_2.png',
        alt: 'layer',
        classImg: 'animate-fadeInRight max-w-[150px] md:max-w-[200px] lg:max-w-[300px] 2xl:max-w-[545px] absolute z-1 top-31.25 2xl:top-0 right-0'
      },
      {
        id: 3,
        src: '/images/home/image_3.png',
        alt: 'sweet',
        classImg: 'max-w-[77px] md:max-w-[150px] lg:max-w-[200px] 2xl:max-w-[244px] absolute z-3 left-1 sm:-left-10 md:-left-20 2xl:-left-36 top-auto bottom-0 sm:bottom-auto sm:top-1/2 -translate-y-1/2'
      },
      {
        id: 4,
        src: '/images/home/image_4.png',
        alt: 'image',
        classImg: 'w-[273px] sm:w-full max-w-full sm:max-w-[450px] 2xl:max-w-[610px] absolute z-3 bottom-0 left-1/2 -translate-x-1/2'
      },
      {
        id: 5,
        src: '/images/home/chip.png',
        alt: 'image',
        classImg: 'animate-fadeInDown hidden sm:block max-w-[90px] md:max-w-[150px] lg:max-w-[200px] 2xl:max-w-[251px] absolute top-10 sm:top-0 -left-10 md:-left-20'
      },
      {
        id: 6,
        src: '/images/home/chip_1.png',
        alt: 'image',
        classImg: ' sm:hidden block max-w-[77px] absolute top-10 sm:top-0 left-0'
      },
    ]
    const images2 = [
      {
        id: 1,
        src: '/images/home/diamond.png',
        alt: 'diamond',
        classImg: 'hidden xl:block xl:w-[150px] 2xl:w-[223px] z-2 absolute top-1/2 -translate-y-1/2 left-0'
      },
      {
        id: 2,
        src: '/images/home/brilliant.png',
        alt: 'brilliant',
        classImg: 'animate-pulse w-[100px] lg:w-[131px] z-2 absolute bottom-2 md:bottom-0 xl:bottom-14 right-10 lg:right-24 xl:right-52'
      },
      {
        id: 3,
        src: '/images/home/light.png',
        alt: 'light',
        classImg: 'animate-pulse w-[100px] md:w-[150px] lg:w-[223px] z-2 absolute bottom-8 right-0 xl:right-20'
      },
      {
        id: 4,
        src: '/images/home/light.png',
        alt: 'light',
        classImg: 'animate-pulse w-[100px] md:w-[150px] lg:w-[223px] z-2 absolute top-5 lg:top-20 right-5'
      },
      {
        id: 5,
        src: '/images/home/diamond_2.png',
        alt: 'diamond',
        classImg: 'animate-pulse xl:hidden block w-[120px] lg:w-[150px] z-2 absolute bottom-0 md:bottom-3 left-0'
      },
    ]

    return {
      showModal,
      images,
      images2
    }
  }
}
</script>

