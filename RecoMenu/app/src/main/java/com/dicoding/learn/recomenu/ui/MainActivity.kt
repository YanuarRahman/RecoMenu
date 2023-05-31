package com.dicoding.learn.recomenu.ui

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.dicoding.learn.recomenu.R
import com.dicoding.learn.recomenu.auth.AuthActivity
import com.dicoding.learn.recomenu.auth.LoginFragment

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        val intentLogin = Intent(this, AuthActivity::class.java)
        startActivity(intentLogin)

    }
}