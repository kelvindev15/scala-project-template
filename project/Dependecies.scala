import sbt.*

object Dependecies {
  lazy val scalaTestVersion = "3.2.17"

  val scalaTest = "org.scalactic" %% "scalactic" % scalaTestVersion
  val scalactic = "org.scalatest" %% "scalatest" % scalaTestVersion % "test"

  val scalaTestBundle = Seq(scalaTest, scalactic)
}