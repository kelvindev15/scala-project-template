import Dependecies.*

ThisBuild / scalaVersion := "3.3.1"
ThisBuild / organization := "io.github.kelvindev15"

wartremoverErrors ++= Warts.all

lazy val hello = (project in file("."))
  .settings(
    name := "Hello",
    libraryDependencies ++= scalaTestBundle
  )
