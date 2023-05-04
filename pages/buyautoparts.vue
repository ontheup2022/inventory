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
      <template slot="chooseaparts" slot-scope="row">
        <td>{{ row.item.no }}</td>
        <td>{{ row.item.result }}</td>
        <td>
          <v-btn class="mx-2" fab dark small color="pink">
            <v-icon dark>แก้ไข</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
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
        { text: "เลือก", value: "chooseaparts" },
      ],
      thebuyautoparts: [],
    };
  },
};
</script>