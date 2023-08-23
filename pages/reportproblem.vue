<template>
  <v-card>
    <v-toolbar flat color="blue-grey" dark>
      <v-toolbar-title>แจ้งความประสงค์เพื่อแก้ไขระบบ</v-toolbar-title>
    </v-toolbar>

    <!-- <v-card-text>
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

      <v-dialog v-model="dialogReport" max-width="500px">
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
      </v-dialog> -->

      <template v-slot:top>
        <v-toolbar flat>
          <v-dialog v-model="dialogReport" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <!-- <v-card-text>
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
              </v-card-text> -->

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogCancel" max-width="500px">
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
      <v-text-field filled label="หัวข้อเรื่อง" value=""></v-text-field>

      <v-textarea filled label="รายละเอียด" value=""></v-textarea>

      <v-divider class="my-2"></v-divider>

      <v-item-group multiple>
        <v-subheader>Tags</v-subheader>
        <v-item v-for="n in 1" :key="n" v-slot="{ active, toggle }">
          <v-chip-group multiple active-class="primary--text">
            <v-chip v-for="tag in tags" :key="tag">
              {{ tag }}
            </v-chip>
          </v-chip-group>

          <!-- <v-chip
            active-class="purple--text"
            :input-value="active"
            @click="toggle"
          >
            Tag {{ tags }}
          </v-chip> -->
        </v-item>
      </v-item-group>
    </v-card-text>

    <v-divider></v-divider>
   

    <v-card-actions>
      <v-spacer></v-spacer>
      
      <v-btn color="error" @click="dialogDelete(item)"> ยกเลิกการแจ้ง </v-btn>
      <v-btn color="success" @click="dialogReport(item)"> ส่งให้แอดมิน </v-btn>
    
  </v-card-actions></v-card
  >
</template>


<script>
export default {
  data: () => ({
    tags: [
      "ข้อมูลคลาดเคลื่อน",
      "รายชื่อพนักงานไม่ถูกต้อง",
      "ไม่สามารถเบิกอะไหล่ได้",
      "ไม่สามารถสั่งซื้อได้",
      "การแจ้งเตือนผิดปกติ",
      "ลืมรหัสผ่าน",
      "ระบบมีบัคไม่ทราบสาเหตุ",
      "อื่นๆ",
    ],
    methods: {
      deleteItemConfirm() {
        this.reportproblem.splice(this.editedIndex, 1);
        this.closeDelete();
      },

      closeDelete() {
        this.dialogReport = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },

      save() {
        if (this.editedIndex > -1) {
          Object.assign(
            this.thebuyautoparts[this.editedIndex],
            this.editedItem
          );
        } else {
          this.thebuyautoparts.push(this.editedItem);
        }
        this.close();
      },
    },
  }),
};
</script>

<!-- <script>
export default {
  data: () => ({
    tags: [
      "ข้อมูลคลาดเคลื่อน",
      "รายชื่อพนักงานไม่ถูกต้อง",
      "ไม่สามารถเบิกอะไหล่ได้",
      "ไม่สามารถสั่งซื้อได้",
      "การแจ้งเตือนผิดปกติ",
      "ลืมรหัสผ่าน",
      "ระบบมีบัคไม่ทราบสาเหตุ",
      "อื่นๆ",
    ],
  }),
};
</script> -->