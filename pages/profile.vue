<template>
  <v-card class="mx-auto" max-width="1000" tile>
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    ></v-img>
    <v-col>
      <v-avatar size="100" style="position: absolute; top: 130px">
        <v-img
          src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
        ></v-img>
      </v-avatar>
    </v-col>
    <v-list-item color="rgba(0, 0, 0, .4)">
      <v-list-item-content>
        <v-list-item-title class="title">Akanit Innunchai</v-list-item-title>
        <v-list-item-subtitle>Admin</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card class="mx-auto" max-width="500">
      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-card>
</template>

<script>
import { createApp } from "vue";
import { createVuetify } from "vuetify";

export default {
  name: "menuprofile",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-inbox-arrow-down",
          text: "Inbox To Employee",
          to: "/employeehomeinbox",
        },
        {
          icon: "mdi-account-edit",
          text: "Edit Profile",
        },
        {
          icon: "mdi-account-check",
          text: "Manage Employee",
          to: "/memberhome",
        },
        {
          icon: "mdi-logout",
          text: "Log Out",
        },
      ],
      model: 1,
      miniVariant: false,
      right: true,
      rightDrawer: false,
    };
  },
};
</script>
