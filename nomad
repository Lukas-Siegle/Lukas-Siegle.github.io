job "personal-page.stage" {
  datacenters = ["dc1"]

  type = "service"

  group "app" {
    count = 1

    network {
       port "http" {
         to = 3000
       }
    }
    
    volume "blog" {
      type = "host"
      read_only = true
      source = "blog"
     }

    task "server" {

      driver = "docker"

      volume_mount {
      	volume = "blog"
        destination = "/app/src/lib/assets/blog"
        read_only = true
      }
      
      config {
        force_pull = true
        image = "lukas278/personal-page:latest"
        ports = ["http"]

      }
    }
    service {
      name = "personal-page"
      port = "http"
      provider = "nomad"
      tags     = [
          "traefik.enable=true",
          "traefik.http.routers.ppage.entrypoints=websecure,web",
          "traefik.http.routers.ppage.rule=Host(`siegle.app`)"
        ]
    }
  }
}