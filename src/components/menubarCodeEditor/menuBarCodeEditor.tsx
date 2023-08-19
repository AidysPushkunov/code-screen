import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";


const MenuBarCodeEditor: React.FC = () => {
    return (
        <div className="flex justify-between">
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>Themes</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Dracula</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>GitHub Theme</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Default</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div>
    )
}

export { MenuBarCodeEditor }