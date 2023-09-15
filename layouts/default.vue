<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="#90CAF9"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="#1E88E5">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>Inventory Autoparts</v-toolbar-title>

      <v-spacer />
      <div class="text-center">
        <!-- <v-btn
          class="ma-2"
          :loading="loading2"
          :disabled="loading2"
          color="blue-grey"
          to="/test"
          @click="loader = 'loading2'"
        >
          เพิ่มรายชื่อ
          <template v-slot:loader>
            <span>Loading...</span>
          </template>
        </v-btn> -->
      </div>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span color="#000000"
        >SeniorProject MFU &copy; {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
import { createApp } from "vue";
import { createVuetify } from "vuetify";

export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-account-circle-outline",
          title: "บัญชีของคุณ",
          to: "/profile",
        },

        {
          icon: "mdi-clipboard-file-outline",
          title: "ข้อมูลอะไหล่ยนต์",
          to: "/buyautoparts",
        },
        {
          icon: "mdi-card-account-details-outline",
          title: "ข้อมูลพนักงาน",
          to: "/dataemployee",
        },
        // {
        //   icon: "mdi-arrow-up-circle-outline",
        //   title: "เบิกอะไหล่",
        //   to: "/buyparts",
        // },
        // {
        //   icon: "mdi-wallet-bifold-outline",
        //   title: "สั่งซื้ออะไหล่",
        //   to: "/buyautoparts",
        // },
        {
          icon: "mdi-content-paste",
          title: "สรุปรายงาน",
          to: "/reportday",
          // to: "/reportmonth",
        },
        {
          icon: "mdi-bell-alert",
          title: "การแจ้งเตือน",
          to: "/notifications",
        },
        {
          icon: "mdi-alert",
          title: "แจ้งปัญหาการใช้งาน",
          to: "/reportproblem",
        },
        {
          icon: "mdi-logout",
          title: "ออกจากระบบ",
          to: "/home",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Inventory Autopart",
    };
  },
};
</script>
