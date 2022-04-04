$(document).ready(function () {
  $("#logoMenu").click(function () {
    $("#a").slideDown("fast");
    $("#a").css("display", "flex");
    $("#responsive").css("display", "none");
    $("#responsive2").css("display", "flex");
  });
  $("#logoCroix").click(function () {
    $("#a").slideUp("fast");
    $("#responsive").css("display", "flex");
    $("#responsive2").css("display", "none");
  });

  $(".MenuOFF").click(function () {
    // $("#a").css("display","none");
    $("#a").slideUp("fast");
    $("#responsive").css("display", "flex");
    $("#responsive2").css("display", "none");
  });

  if ($(window).width() < 768) {
    $(".monNom").click(function () {
      $("#a").slideUp("fast");
      $("#responsive2").css("display", "none");
      $("#responsive").css("display", "flex");
    });
  }

  $(function () {
    $("a[href*='#']:not([href='#'])").click(function () {
      if (
        location.hostname == this.hostname &&
        this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
      ) {
        var anchor = $(this.hash);
        anchor = anchor.length
          ? anchor
          : $("[name=" + this.hash.slice(1) + "]");
        if (anchor.length) {
          $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
        }
      }
    });
  });
});

import { auth, storage } from "firebase";
import { initializeApp } from "./firebase-app.js";
import admin from "firebase-admin";

import { auth as _auth } from "firebaseui";

import serviceAccount from "../../gauthiercv-7969e-firebase-adminsdk-pnerx-61ea7e46e4.json";

import firebase from "firebase";
require("firebase/auth");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
