<script lang="ts">
    import logo from "+assets@logo.png?url";
    import logoLight from "+assets@logo-light.png?url"
    import Swap from "+component@Swap.svelte";

    interface NavItems {
        name: string;
        link: string;
    }

    const navItems: NavItems[] = [
        {
            name: "Home",
            link: "/#home"
        },
        {
            name: "About",
            link: "/#about"
        },
        {
            name: "Projects",
            link: "/#projects"
        },
        {
            name: "Blog",
            link: "/blog"
        }
    ];
</script>

<nav class="sticky z-50 top-0 left-0 flex justify-between items-center py-4 px-6 bg-[#e8dcf9] dark:bg-[#2c243c] shadow-md">
    <div class="flex justify-around items-center gap-2 text-4xl font-bold tracking-tighter" id="title">
        <img src={logo} alt="logo" height={70} width={70} class="hidden dark:block"/>
        <img src={logoLight} alt="logo" height={70} width={70} class="dark:hidden"/>
        NaviTheCoderboi
    </div>
    <div class="flex justify-between items-center gap-5">
        <ul class="flex justify-center items-center gap-3">
            {#each navItems as navItem}
                    <li class="text-2xl font-light tracking-tighter duration-300 px-2 py-1 hover:text-orange-500">
                        <a href={navItem.link}>{navItem.name}</a>
                    </li>
            {/each}
        </ul>
        <Swap />
    </div>
</nav>

<style>
    #title {
        background-clip: border-box;
        background: linear-gradient(to right, #FF5D01, #8b5cf6);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
</style>