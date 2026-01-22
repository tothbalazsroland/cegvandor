<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <!-- TITLE -->
        <h1 class="text-h4 font-weight-bold mb-6">
          {{ t('contactus.title') }}
        </h1>

        <!-- INTRO TEXT -->
        <p class="mb-6">
          {{ t('contactus.intro') }}
        </p>

        <!-- CONTACT INFO CARD -->
        <v-card class="mb-8" elevation="2">
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" class="mb-4 mb-sm-0">
                <strong>E-mail</strong>
                <div>
                  <a href="mailto:info@cegvandor.hu">
                    info@cegvandor.hu
                  </a>
                </div>
              </v-col>

              <v-col cols="12" sm="6">
                <strong>{{ t('contactus.phone')}}</strong>
                <div>
                  +36 30 235 5615
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
