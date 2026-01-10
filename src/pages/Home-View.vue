<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="text-h4 font-weight-bold mb-6">
          {{ t('home.title') }}
        </h1>

        <p class="mb-4">
          {{ t('home.welcomeMessage') }}
        </p>

        <h2 class="text-h5 font-weight-bold mt-8 mb-4">Miért válassza a Cégvándort?</h2>

        <ul class="mb-6">
          <li class="mb-2">
            <strong>{{ t('home.features.custom.title')}}</strong> {{ t('home.features.custom.text') }}
          </li>
          <li class="mb-2">
            <strong>{{ t('home.features.global.title')}}</strong> {{ t('home.features.global.text')}}
          </li>
          <li class="mb-2">
            <strong>{{ t('home.features.reliable.title')}}</strong> {{ t('home.features.reliable.text')}}
          </li>
        </ul>

        <p class="mb-6">
          {{ t('home.outro') }}
        </p>

      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
