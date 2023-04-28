<template>
  <div class="text-center d-flex align-center justify-space-around">
    <v-col>
      <v-row justify="center" placeholder="">
        <!-- <v-text-field label="วันที่" v-model="picker">
          <v-date-picker v-model="picker"> </v-date-picker>
        </v-text-field>
        <v-text-field label="ยอดรวมทั้งหมด" v-model="picker">
          <v-date-picker v-model="picker"> </v-date-picker>
        </v-text-field> -->
        <v-text-field
          label="Search"
          placeholder=""
          class="mdi mdi-magnify"
          filled
          rounded
          dense
        >
        </v-text-field>
      </v-row>

      <!-- <v-btn
        elevation="2"
        class="ma-2"
        :loading="loading2"
        :disabled="loading2"
        color="success"
        @click="loader = 'loading2'"
      >
        Save</v-btn
      >
      <v-btn elevation="2" depressed color="error"> Cancel</v-btn> -->
      <v-btn
        elevation="2"
        class="ma-2"
        :loading="loading2"
        :disabled="loading2"
        color="success"
      >
        ค้นหา</v-btn
      >

      <!-- <v-btn
      elevation="2"
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      เพิ่ม</v-btn
    > -->
      <v-data-table
        :headers="headers"
        :items="thebuyparts"
        :items-per-page="5"
        class="elevation-2"
        density="compact"
        item-key="name"
      >
      </v-data-table>
    </v-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "No.",
          align: "numberspart",
          sortable: false,
          value: "name",
        },
        { text: "หมายเลขอะไหล่", value: "partscode" },
        { text: "รายการ", value: "listed" },
        { text: "จำนวน", value: "number" },
        { text: "ราคา/หน่วย", value: "priceaparts" },
        { text: "ราคาทั้งหมด", value: "priceapartsell" },
        { text: "เลือกเบิก", value: "pickup" },
      ],
      thebuyparts: [],
    };
  },
};
</script>