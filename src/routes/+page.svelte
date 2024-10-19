<script lang="ts">
    import { writable, type Writable } from "svelte/store"
    import { onMount, onDestroy } from "svelte"
    import { CashuToken } from "$lib/interfaces"

    import TGError from "$lib/error"
    import TGRedeem from "$lib/redeem-token"
    import TGState from "$lib/state"

    let token: Writable<CashuToken> = writable("")

    onMount( () => {

    });

    onDestroy( () => {

    });

</script>
  
<div class="min-h-screen flex items-center justify-center bg-black text-white">
    <div class="w-full max-w-lg bg-white text-black rounded-lg p-8 md:p-12 lg:p-16 shadow-lg">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-6 text-center">
        tollgate.
      </h1>

        <form on:submit={ (event) => TGRedeem(event) }>
            <p class="text-base md:text-lg lg:text-xl">
                <Textfield
                    value={$token}
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Cashu Token"
                >
                    <HelperText></HelperText>
                </Textfield>
                <Button type="submit" color="secondary" on:click={() => clicked++} variant="unelevated">
                    <Label>Submit</Label>
                </Button>
            </p>
        </form>
    </div>
  </div>