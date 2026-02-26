plugins {
    id("com.github.node-gradle.node") version "7.1.0"
}

group = "org.supplementum"
version = "0.0.1-SNAPSHOT"

node {
    version.set("24.11.0")
    download.set(true)
    workDir.set(layout.buildDirectory.dir("nodejs"))
    npmWorkDir.set(layout.buildDirectory.dir("npm"))
}