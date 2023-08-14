<template>
  <v-col cols="12" class="py-2">
    <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
      <v-btn value="left" to="/reportday"> สรุปรายวัน </v-btn>

      <v-btn value="center" to="/reportmonth"> สรุปรายเดือน </v-btn>

      <v-btn value="right" to="/reportyear"> สรุปรายปี </v-btn>
    </v-btn-toggle>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> 2022 </v-expansion-panel-header>
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
        <v-expansion-panel-header> 2021 </v-expansion-panel-header>
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
        <v-expansion-panel-header> 2020 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ไม่มีข้อมูล
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel></v-expansion-panels
    >

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> 2019 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ไม่มีข้อมูล
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> 2018</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ไม่มีข้อมูล
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> 2017 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ไม่มีข้อมูล
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> 2016 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ไม่มีข้อมูล
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> 2015 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ไม่มีข้อมูล
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> 2014 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ไม่มีข้อมูล
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> 2013 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ไม่มีข้อมูล
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> 2012 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ไม่มีข้อมูล
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> 2011 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="red accent-4"
            elevation="2"
          >
            ไม่มีข้อมูล
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-col>
</template>   
