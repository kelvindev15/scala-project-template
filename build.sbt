import Dependecies.*
ThisBuild / resolvers += "Artima Maven Repository" at "https://repo.artima.com/releases"
ThisBuild / scalaVersion := "3.3.0"
ThisBuild / organization := "io.github.kelvindev15"

wartremoverErrors ++= Warts.all
wartremoverErrors --= Seq(Wart.Var, Wart.Equals)
scalafmtDetailedError := true

// enablePlugins(CucumberPlugin)
// CucumberPlugin.glues := List("example.scenarios")

lazy val hello = (project in file("."))
  .settings(
    name := "Hello",
    scalaVersion := "3.3.0",
    libraryDependencies ++= scalaTestBundle,
    // libraryDependencies ++= cucumberBundle,
    libraryDependencies += scalaTestJUnit5
  )
