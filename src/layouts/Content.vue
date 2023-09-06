<template>
  <v-app>
    <vertical-nav-menu :is-drawer-open.sync="isDrawerOpen"></vertical-nav-menu>

    <v-app-bar
      app
      flat
      absolute
      color="transparent"
    >
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-6">
          <!-- Left Content -->
          <v-app-bar-nav-icon
            class="d-block d-lg-none me-2"
            @click="isDrawerOpen = !isDrawerOpen"
          ></v-app-bar-nav-icon>
          <!-- <v-text-field
            rounded
            dense
            outlined
            :prepend-inner-icon="icons.mdiMagnify"
            class="app-bar-search flex-grow-0"
            hide-details
          ></v-text-field> -->

          <v-spacer></v-spacer>

          <!-- Right Content -->
          <theme-switcher></theme-switcher>
          <v-btn
            icon
            small
            class="ms-3"
          >
            <v-badge
              :content="notification"
              v-if="notification > 0"
            >
            <v-icon>
              {{ icons.mdiBellOutline }}
            </v-icon>
            </v-badge>
            <v-icon v-if="notification == 0">
              {{ icons.mdiBellOutline }}
            </v-icon>

          </v-btn>
          <app-bar-user-menu></app-bar-user-menu>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <div class="app-content-container boxed-container pa-6">
        <slot></slot>
      </div>
    </v-main>

    <v-footer
      app
      inset
      color="transparent"
      absolute
      height="56"
      class="px-0"
    >
    <div class="boxed-container w-full">
        <div class="mx-6 d-flex justify-space-between">
          <span>
            &copy; 2023 <a
              href="mailto:michel.rosa@unieuro.edu.br"
              class="text-decoration-none"
              target="_blank"
            >Nuted Unieuro</a></span>
        </div>
      </div>
      <div class="boxed-container w-full">
        <div class="mx-6 d-flex justify-space-between">
          <span v-if="lastCommitDate">
            Última atualização: {{ new Date(lastCommitDate).toLocaleDateString() }}
          </span>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiMagnify, mdiBellOutline, mdiGithub } from '@mdi/js'
import VerticalNavMenu from './components/vertical-nav-menu/VerticalNavMenu.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import AppBarUserMenu from './components/AppBarUserMenu.vue'
import processosService from '../services/processos.service'
import { _ } from '@/utils'

export default {
  components: {
    VerticalNavMenu,
    ThemeSwitcher,
    AppBarUserMenu,
    processosService
  },
  data() {
    const isDrawerOpen = ref(null)

    return {
      isDrawerOpen,
      notification: 0,
      arrayOld: [],
      arrayNew: [],
      // Icons
      icons: {
        mdiMagnify,
        mdiBellOutline,
        mdiGithub,
      },
    }
  },
  methods: {
    getNotification(){
      processosService.processospendentesusuario(this.$store.state.auth.user.id)
        .then((response) => {
            if (response.data) {
                if(this.arrayOld.length === 0){
                  this.arrayOld = response.data.data
                  this.arrayNew =  response.data.data
                }
                else{
                  const array2Sorted = this.arrayOld.slice().sort();
                  let checkArray = response.data.data.length === this.arrayOld.length && response.data.data.slice().sort().every(function(value, index) {
                      return value === array2Sorted[index];
                  });
                  if(!checkArray){
                    this.arrayOld = response.data.data
                  }
                }
                this.notification = response.data.data.length
            }
        }).catch((e) => {
            console.log(e)
        }).finally(() => {
            this.isLoading = false
        })
    },
    intervalFetchData: function () {
    setInterval(() => {    
        this.getNotification();
        }, 30000);    
    }
  },
  async mounted () {
    this.intervalFetchData();
    try {
      const response = await fetch('https://api.github.com/repos/Nuted-Unieuro/papelzero/commits');
      const commits = await response.json();
      this.lastCommitDate = commits[0].commit.committer.date;
    } catch (error) {
      console.error('Erro ao buscar a data do último commit:', error);
    }
  },
  created (){
    this.getNotification()
  }
}
</script>

<style lang="scss" scoped>
.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}

.boxed-container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
</style>
