<template>
<div>
    <section class="gradient-form z-30 fixed top-0 h-full w-full">
        <div class="g-6 relative flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div class="z-10 absolute bg-black opacity-80 w-full h-full" @click="closeModal()"></div>
            <div class="w-[600px] z-50 mx-auto">
                <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                    <div class="flex justify-center">
                        <!-- Left column container-->
                        <div class="px-6 py-5">
                            <!--Logo-->
                            <div class="text-center">
                                <img class="mx-auto w-48" src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo" />
                                <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold">
                                    We are The Lotus Team
                                </h4>
                            </div>
                            <form @submit="loginAccount">
                                <p class="mb-4">Please login to your account</p>
                                <!--Username input-->
                                <div class="relative mb-4" data-te-input-wrapper-init>
                                    <input type="email" v-model="email" name="email" class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="email" placeholder="Email" />
                                    <label v-if="!email" for="email" class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Email
                                    </label>
                                </div>

                                <!--Password input-->
                                <div class="relative mb-4" data-te-input-wrapper-init>
                                    <input type="password" v-model="password" name="password" class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="password" placeholder="Password" />
                                    <label v-if="!password" for="password" class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Password
                                    </label>
                                </div>

                                <!--Submit button-->
                                <div class="mb-12 pb-1 pt-1 text-center">
                                    <button class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]" type="submit" data-te-ripple-init data-te-ripple-color="light" style="
                                                background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
                                            ">
                                        Log in
                                    </button>
                                    <!--Forgot password link-->
                                    <a href="#!">Forgot password?</a>
                                </div>
                                <!--Register button-->
                                <div class="flex items-center justify-between pb-6">
                                    <p class="mb-0 mr-2">Don't have an account?</p>
                                    <div @click="showRegister()" class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" data-te-ripple-init data-te-ripple-color="light">
                                        Register
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import axios from "axios";

import {useStore} from "vuex";

export default {
    setup(){
    const store = useStore();
    return {
      store
    }
  },
    data() {
        return {
            email: '',
            password: '',
            username: ''
        }
    },
    methods: {
        closeModal() {
            this.$emit('close-modal');
        },
        showRegister() {
            this.$emit('register');
        },
        updateUser(data) {
            this.store.commit("setUser", data);
            this.$emit('reload');
        },

        loginAccount(event) {
            event.preventDefault();
            const userData = {
                email: this.email,
                password: this.password,
            };
            axios.post('api/auth/login', userData)
                .then(Response => {
                    this.updateUser(Response.data)
                    this.closeModal();
                })
                .catch(error => {
                    console.error(error);
                    // Hiển thị thông báo lỗi cho người dùng
                });
        }
    }
}
</script>

<style>

</style>
