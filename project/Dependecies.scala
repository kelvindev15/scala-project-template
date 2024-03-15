import sbt.*

object Dependecies {
  /*
   * Versions
   */
  lazy val scalaTestVersion = "3.2.17"
  lazy val cucumberVersion = "8.20.0"
  /*
   * Libraries
   */
  val cucumberCore = "io.cucumber" % "cucumber-core" % "7.15.0" % "test"
  val cucumberJunit =
    "io.cucumber" % "cucumber-junit" % cucumberVersion % "test"
  val cucumberJvm = "io.cucumber" % "cucumber-jvm" % cucumberVersion % "test"
  val cucumberScala = "io.cucumber" %% "cucumber-scala" % cucumberVersion % Test
  val scalactic = "org.scalactic" %% "scalactic" % scalaTestVersion
  val scalaTest = "org.scalatest" %% "scalatest" % scalaTestVersion % "test"
  val scalaCheck = "org.scalacheck" %% "scalacheck" % "1.17.0" % Test
  val scalaTestJUnit5 =
    "org.scalatestplus" %% "junit-5-10" % "3.2.17.0" % "test"
  val scalaTestMockito =
    "org.scalatestplus" %% "mockito-5-10" % "3.2.18.0" % "test"
  /*
   * Bundles
   */
  val scalaTestBundle: Seq[ModuleID] = Seq(scalaTest, scalactic)
  val cucumberBundle: Seq[ModuleID] = Seq(cucumberCore, cucumberScala)
}
