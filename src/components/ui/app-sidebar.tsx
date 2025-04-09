"use client";

// components/app-sidebar.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar"
import {
  UserRoundPlus,
  ClipboardPenLine,
  SquareActivity,
  Plus,
  UserRoundSearch
} from "lucide-react"

const menuItems = [
  { title: "Cadastro de Paciente", icon: UserRoundPlus, href: "/RegisterP/" },
  { title: "Pacientes Cadastrados", icon: UserRoundSearch, href: "/Dashboard" },
  { title: "Ficha Medica", icon: ClipboardPenLine, href: "#" },
  { title: "Internação", icon: SquareActivity, href: "#" },
  // { title: "", icon: Search, href: "#" },
  // { title: "", icon: Settings, href: "#" }
]

export function AppSidebar() {
  return (
    <Sidebar className="sidebar">
      <SidebarContent className="sidebarColor">
        <SidebarGroup>
          
          <SidebarGroupLabel className="sidebarIcon" ><Plus className="Plus"/><text className="texticon">ClickMedic</text></SidebarGroupLabel>
          <SidebarGroupContent >
            <SidebarMenu className="sidebar-gap" >
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title} >
                  <SidebarMenuButton asChild className="sidebarColor">
                    <a href={item.href} className="flex items-center gap-2">
                      <span className="icon-size">
                        <item.icon className="w-5 h-5" />
                      </span>


                      <span className="text-size">{item.title}</span>

                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
