<template>
  <v-col>
    <v-text-field
      label="Search"
      placeholder=""
      class="mdi mdi-magnify"
      filled
      rounded
      dense
    >
    </v-text-field>
    <v-btn elevation="2">ค้นหา</v-btn>
    <v-btn
      elevation="6"
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
      to="/addautoparts"
      >เพิ่มข้อมูลการสั่งซื้อ</v-btn
    >
    <v-data-table
      :headers="headers"
      :items="thebuyautoparts"
      :items-per-page="5"
      class="elevation-2"
      density="compact"
      item-key="name"
    >
      <!-- <template slot="chooseaparts" slot-scope="row">
        <td>{{ row.item.no }}</td>
        <td>{{ row.item.result }}</td>
        <td>
          <v-btn class="mx-2" fab dark small color="pink">
            <v-icon dark>แก้ไข</v-icon>
          </v-btn>
        </td>
      </template> -->
      <template v-slot:top>
        <v-toolbar flat>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="No."
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.calories"
                        label="หมายเลขรายการ"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.fat"
                        label="จำนวน"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.chooseaparts="{ item }">
        <v-btn small class="mr-2" @click="editItem(item)"> แก้ไข </v-btn>
        <!-- <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon> -->
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "No.",
        align: "numbers",
        sortable: false,
        value: "name",
      },
      { text: "วันที่สั่ง", value: "datetoorder" },
      { text: "บริษัท", value: "company" },
      { text: "ยอดรวม", value: "priceallaparts" },
      { text: "เลือก", value: "chooseaparts", sortable: false },
    ],
    thebuyautoparts: [],
    editedIndex: -1,
    editedItem: {
      name: 0,
      datetoorder: "",
      company: "",
      priceallparts: "",
    },
    defaultItem: {
      name: 0,
      datetoorder: "",
      company: "",
      priceallparts: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.thebuyautoparts = [
        {
          name: "1",
          datetoorder: "23022022",
          company: "vfbfgngfnfg",
          priceallparts: 3200,
        },
        {
          name: "2",
          datetoorder: "23022022",
          company: "vfbfgngfnfg",
          priceallparts: 3600,
        },
        {
          name: "3",
          datetoorder: "23022022",
          company: "vfbfgngfnfg",
          priceallparts: 3500,
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.thebuyautoparts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.thebuyautoparts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.thebuyautoparts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.thebuyautoparts[this.editedIndex], this.editedItem);
      } else {
        this.thebuyautoparts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>