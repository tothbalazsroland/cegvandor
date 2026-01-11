<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="4">
        <h1 class="text-h4 font-weight-bold mb-6">
          {{ t('login.title') }}
        </h1>

        <p class="mb-4">
          {{ t('login.subtitle') }}
        </p>

        <v-form ref="loginForm" @submit.prevent="submitLogin">
          <v-text-field
            v-model="email"
            :label="t('login.email')"
            type="email"
            required
            class="mb-4"
          />
          <v-text-field
            v-model="password"
            :label="t('login.password')"
            type="password"
            required
            class="mb-6"
          />

          <v-alert
            v-if="errorInLogin"
            type="error"
            dense
            class="mb-4"
          >
            {{ t('login.invalidCredentials') }}
          </v-alert>

          <v-btn
            type="submit"
            color="primary"
            block
            class="mb-4"
          >
            {{ t('login.submit') }}
          </v-btn>

        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()

const email = ref('')
const password = ref('')
const errorInLogin = ref('')

const submitLogin = () => {
  // Basic placeholder login logic
  console.log('Logging in with:', email.value, password.value)
  email.value = '';
  password.value = '';
  errorInLogin.value = true;
}
</script>
