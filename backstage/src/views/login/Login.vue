<script setup>
import { reactive, toRefs } from "@vue/reactivity";
import { User, Lock } from "@element-plus/icons-vue";
import axios from "axios";
// 数据集合
const data = reactive({
  // 表单数据
  form: {
    username: "",
    password: "",
    userPassword: "",
  },
  // 复选框状态
  checkedStatus: true,
});
// 点击登录
const login = () => {};
// 抛出
const { form, checkedStatus } = toRefs(data);
</script>

<template>
  <div class="login">
    <div class="login_box">
      <div class="login_header">
        <h1 style="font-weight: 900">
          <img src="../../img/icon.png" alt="" /> <span>在线学习平台</span>
        </h1>
        <p style="color: #409eff">拥有丰富的学习资源最好的学习平台之一</p>
      </div>
      <div class="login_title">
        <p style="color: #409eff">账号密码登录</p>
      </div>
      <el-divider />
      <el-form :model="form">
        <el-form-item>
          <el-input
            :prefix-icon="User"
            :clearable="true"
            placeholder="请输入账号"
            v-model="form.username"
          />
        </el-form-item>
      </el-form>
      <el-form :model="form">
        <el-form-item>
          <el-input
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
            v-model="form.password"
            show-password
          />
        </el-form-item>
      </el-form>
      <div class="login_footer">
        <el-checkbox v-model="checkedStatus" size="large">自动登录</el-checkbox>
        <span @click="$router.push('/register')">新用户注册</span>
        <span>忘记密码</span>
      </div>
      <el-button
        type="primary"
        style="width: 100%; margin-top: 10px"
        @click="login"
        >登录</el-button
      >
    </div>
  </div>
</template>
