<template>
  <v-col cols="12" class="py-2">
    <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
      <v-btn value="left" to="/reportday"> สรุปรายวัน </v-btn>

      <v-btn value="center" to="/reportmonth"> สรุปรายเดือน </v-btn>

      <v-btn value="right" to="/reportyear"> สรุปรายปี </v-btn>
    </v-btn-toggle>
    <v-col class="d-flex" cols="8" sm="6" value="right">
      <v-select :items="items" filled label="เลือกปี"></v-select>
    </v-col>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> January </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="deep-purple accent-4"
            elevation="2"
          >
            มียอดการสั่งซื้อจำนวน :20 รายการ
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel></v-expansion-panels
    >

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> Febuary </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="deep-purple accent-4"
            elevation="2"
          >
            มียอดการเบิกอะไหล่จำนวน : 100 ชิ้น
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> March </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ยังไม่ถึงกำหนด
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel></v-expansion-panels
    >

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> April </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ยังไม่ถึงกำหนด
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> May </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ยังไม่ถึงกำหนด
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> June </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ยังไม่ถึงกำหนด
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> July </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ยังไม่ถึงกำหนด
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> August </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ยังไม่ถึงกำหนด
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> September </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ยังไม่ถึงกำหนด
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> October </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ยังไม่ถึงกำหนด
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> November </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ยังถึงไม่กำหนด
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> December </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ยังไม่ถึงกำหนด
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-col>
</template>   
