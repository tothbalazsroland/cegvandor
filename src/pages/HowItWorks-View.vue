<template>
    <!-- PAGE HEADER -->
    <section class="page-header">
      <v-container class="py-16 text-center">
        <h1 class="font-weight-bold">{{t('howItWorksPage.title')}}</h1>
        <p class="subtitle mt-4">
          {{t('howItWorksPage.subtitle')}}
        </p>
      </v-container>
    </section>

    <!-- STEPS -->
    <section class="steps">
      <v-container class="py-16">
        <v-row>
          <v-col cols="12" md="6" class="step">
            <h3 class="font-weight-bold">{{t('howItWorksPage.steps.step1.title')}}</h3>
            <p>
              {{t('howItWorksPage.steps.step1.description')}}
            </p>
          </v-col>

          <v-col cols="12" md="6" class="step">
            <h3 class="font-weight-bold">{{t('howItWorksPage.steps.step2.title')}}</h3>
            <p>
              {{t('howItWorksPage.steps.step2.description')}}
            </p>
          </v-col>

          <v-col cols="12" md="6" class="step">
            <h3 class="font-weight-bold">{{t('howItWorksPage.steps.step3.title')}}</h3>
            <p>
              {{t('howItWorksPage.steps.step3.description')}}
            </p>
          </v-col>

          <v-col cols="12" md="6" class="step">
            <h3 class="font-weight-bold">{{t('howItWorksPage.steps.step4.title')}}</h3>
            <p>
              {{t('howItWorksPage.steps.step4.description')}}
            </p>
          </v-col>

          <v-col cols="12" md="6" class="step">
            <h3 class="font-weight-bold">{{t('howItWorksPage.steps.step5.title')}}</h3>
            <p>
              {{t('howItWorksPage.steps.step5.description')}}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- WHY PARTNER -->
    <section class="why">
      <v-container class="py-16">
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="font-weight-bold">{{t('howItWorksPage.why.title')}}</h2>
          </v-col>

          <v-col cols="12" md="4">
            <h3 class="font-weight-bold">{{t('howItWorksPage.why.items.timeSaving.title')}}</h3>
            <p>
              {{t('howItWorksPage.why.items.timeSaving.description')}}
            </p>
          </v-col>

          <v-col cols="12" md="4">
            <h3 class="font-weight-bold">{{t('howItWorksPage.why.items.flexible.title')}}</h3>
            <p>
              {{t('howItWorksPage.why.items.flexible.description')}}
            </p>
          </v-col>

          <v-col cols="12" md="4">
            <h3 class="font-weight-bold">{{t('howItWorksPage.why.items.transparent.title')}}</h3>
            <p>
              {{t('howItWorksPage.why.items.transparent.description')}}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA -->
    <section class="cta">
      <v-container class="py-16 text-center">
        <h2>{{t('howItWorksPage.cta.title')}}</h2>
        <v-btn
          color="primary"
          size="large"
          to="/kapcsolat"
        >
          {{t('howItWorksPage.cta.button')}}
        </v-btn>
      </v-container>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.page-header {
  background: rgb(var(--v-theme-surface));
}

.subtitle {
  color: rgba(0, 0, 0, 0.65);
  font-size: 1.1rem;
}

.step h3 {
  margin-bottom: 0.5rem;
}

.why {
  background: white;
}

.cta {
  background: rgb(var(--v-theme-background));
}
</style>
