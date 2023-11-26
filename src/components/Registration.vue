<template>
  <section
      class="w-full h-full flex flex-col sm:grid grid-cols-1 sm:grid-rows-1 sm:grid-cols-360 justify-center rounded-0 sm:rounded-2xl overflow-hidden">
    <div class="overflow-hidden rounded-0 sm:rounded-l-2xl relative w-full bg-none sm:bg-registration-bg bg-bottom bg-no-repeat
    after:content-[''] after:w-full after:h-full sm:after:bg-top after:z-min1 after:bg-gradient-bg after:bg-cover after:bg-no-repeat after:absolute after:top-0 after:left-0">
      <div class="flex flex-col items-center mx-auto max-w-[312px] mt-14">
        <logo class="w-[141px] h-[21px]"/>
        <h3 class="mt-6 sm:mt-12.5 leading-4 tracking-0.08 text-snow text-base text-center uppercase ">
          Deposit 500,
          <p>get 500 USDT as a gift</p>
          <p class="text-primary-gold mt-2">100% cashback for VIPs only</p>
        </h3>
      </div>

      <div v-for="item in images"
           :key='item.id'
           :class="item.classImg"
      >
        <img class="inline-flex w-full h-full" :src='item.src' :alt='item.alt'>
      </div>
    </div>

    <div class="relative w-full p-4 bg-secondary-dark rounded-0 sm:rounded-r-2xl">
      <div
          class="pt-8 sm:pt-22 pb-4 sm:pb-29 flex flex-col items-center justify-center gap-y-8 mx-auto">
        <h3 class="text-xl leading-6 tracking-0.1	text-snow">Registration</h3>

        <div class="grid gap-y-6 w-full mt-0 sm:mt-4">
          <CustomInput
              @click="validationField"
              @validate="validationField"
              :isValid="errors?.email || false"
              img="/images/icons/mail.svg"
              typeInput="text"
              label="Email"
              v-model.trim="credentials.email"
              placeholder="Email"
          />
          <CustomInput
              @click="validationField"
              @validate="validationField"
              :isValid="errors?.password || false"
              textError="minimum 6 characters"
              typeInput="password"
              img="/images/icons/lock.svg"
              label="Password"
              v-model.trim="credentials.password"
              placeholder="Password"
          />

        </div>
        <CustomCheckbox
            @click="validationField"
            @validate="validationField"
            v-model="credentials.flag"
            :isValid="errors?.flag || false"
        >
          <p class="text-primary-gray text-2.5 leading-3.5 tracking-0.05">
            By checking this box when registering on this site, the user confirms that he is over
            18 years of age and has read, understood and accepted the <span
              class='text-primary-gold'>Terms and Conditions.</span>
          </p>
        </CustomCheckbox>
        <button
            :disabled="isDisabled"
            @click="sendCredentials"
            class="flex items-center justify-center bg-primary-gold hover:bg-snow disabled:bg-nero text-primary-dark text-center text-sm leading-4 w-full max-w-[328px] py-4 px-14 rounded-2.5">
          Create an account
        </button>
        <div class="flex flex-col gap-y-3 items-center justify-center">
          <p class="text-snow text-center font-medium text-xs leading-4">Or register with:</p>
          <div class="flex gap-x-2 items-center justify-center">
            <a href="#" v-for="item in socials"
               :key='item.id'
               class='w-12 h-12 grid items-center justify-center bg-secondary-gray rounded-lg '>
              <img class="w-8 h-8" :src='item.src' :alt='item.alt'>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {reactive, ref} from 'vue'

import CustomInput from "@/components/UI/CustomInput.vue";
import Logo from "@/components/Logo.vue";
import CustomCheckbox from "@/components/UI/CustomCheckbox.vue";
import {checkPassword, isChecked, isEmail} from "@/helpers/validation";

export default {
  name: "Registration",
  components: {Logo, CustomInput, CustomCheckbox},
  setup(props,{emit}) {
    let isDisabled = ref(true);
    const credentials = reactive({
      email: '',
      password: '',
      flag: false
    });
    let errors = reactive({});

    const images = [
      {
        id: 1,
        src: '/images/registration/image_1.png',
        alt: 'sweet',
        classImg: 'w-full h-full max-w-[105px] max-h-[92px] absolute -bottom-7 sm:bottom-0 left-0 z-1 sm:z-10'
      },
      {
        id: 2,
        src: '/images/registration/image_2.png',
        alt: 'layer',
        classImg: 'w-full max-w-[100px] max-h-[100px] absolute top-40 sm:top-53 right-0'
      },
      {
        id: 3,
        src: '/images/registration/image_3.png',
        alt: 'sweet',
        classImg: 'max-w-[75px] max-h-[66px] absolute -left-6 sm:left-4 top-[166px] sm:top-74.75'
      },
      {
        id: 4,
        src: '/images/registration/image_4.png',
        alt: 'image',
        classImg: 'w-full sm:max-w-[365px]  sm:max-h-[399px] max-w-[164px] max-h-[149px] sticky sm:absolute bottom-0 sm:left-0 sm:-translate-x-0 left-1/2 -translate-x-1/2 mt-4 sm:mt-0'
      },
    ]
    const socials = [
      {id: 1, src: '/images/social/metamask.svg', alt: 'metamask'},
      {id: 2, src: '/images/social/apple.svg', alt: 'apple'},
      {id: 3, src: '/images/social/facebook.svg', alt: 'facebook'},
      {id: 4, src: '/images/social/google.svg', alt: 'google'},
    ]
    const validationField = () => {
      const valid = {
        email: isEmail,
        password: checkPassword,
        flag: isChecked
      }
      for (let obj in credentials) {
        if (obj) {
          const text = valid?.[obj]?.(credentials?.[obj])

          if (text.length) {
            errors[obj] = {
              flag: true,
              text: text
            }
          } else {
            delete errors[obj]
          }

        }
      }
      Object.keys(errors)?.length ? isDisabled.value = true : isDisabled.value = false
    }

    const sendCredentials = () => {
      console.log(credentials)
      emit('closeModal')
    }

    return {
      socials,
      images,
      credentials,
      sendCredentials,
      errors,
      isDisabled,
      validationField
    }
  }
}
</script>
