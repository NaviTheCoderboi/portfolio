<script lang="ts">
    import { writable } from "svelte/store";

    const initial = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const theme = writable<string>(initial);

    theme.subscribe((value) => {
        const root = document.querySelector(":root") as HTMLElement;
        localStorage.setItem("theme", value);
        if (value === "dark") {
            document.documentElement.classList.add("dark");
            root.style.setProperty("--from", "#2c243c");
            root.style.setProperty("--via", "#241c3c");
            root.style.setProperty("--to", "#181526");
            root.style.setProperty("--thumb", "#4d485e ");
        } else {
            document.documentElement.classList.remove("dark");
            root.style.setProperty("--from", "#e8dcf9");
            root.style.setProperty("--via", "#e9e5fe");
            root.style.setProperty("--to", "white");
            root.style.setProperty("--thumb", "#c7c5d2");
        }
    });

    $: currentTheme = $theme;

    const swap = () => {
        if (currentTheme == 'light') {
			theme.set('dark');
		} else {
			theme.set('light');
		}
    };

</script>

<button class="text-[#FF5D01] flex justify-center items-center relative">
    <button class={`duration-500 absolute top-0 left-0 material-symbols-outlined text-5xl ${
			currentTheme === "light" ? 'opacity-100' : 'opacity-0'
		}`} on:click={swap}>
        dark_mode
    </button>
    <button class={`duration-500 absolute top-0 left-0 material-symbols-outlined text-5xl ${
        currentTheme === "light" ? 'opacity-0' : 'opacity-100'
    }`} on:click={swap}>
        light_mode
    </button>
</button>

<style>
    button {
        height: 3rem;
        width: 3rem;
    }
</style>