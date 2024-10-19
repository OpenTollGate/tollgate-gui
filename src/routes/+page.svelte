<script lang="ts">
    import { onMount, onDestroy } from "svelte"
    import { writable, type Writable } from "svelte/store"
    import type { CashuToken, authToken } from "$lib/interfaces"
    
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button"
    import { Label } from "$lib/components/ui/label"
    import * as Card from '$lib/components/ui/card';

    import TGError from "$lib/error"
    import TGPay from "$lib/pay"
    import { getSessionValue, setSessionValue} from "$lib/state"

    let cashuToken: Writable<CashuToken> = writable(String())
    let authToken: Writable<AuthToken> = writable(String())
    let showAuth: Writable<boolean> = writable(false)
    
    onMount( () => {
      $authToken = getSessionValue('authToken')
      if($authToken?.length){
        TGPay({authToken: $authToken})
          .catch(console.error)}
      else {
        $showAuth = true;
      }
    });

    onDestroy( () => {
      
    });

</script>

{#if $showAuth}
<Card.Root>
  <Card.Header>
    <Card.Title>
      tollbooth
    </Card.Title>
    <Card.Description>
    </Card.Description>
  </Card.Header>
  <Card.Content>
    <form on:submit={ (event) => TGPay({cashuToken: $cashuToken}) }>
    <Input  
        value={$cashuToken}
        class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="Cashu Token"
    >
    </Input>
    <Button type="submit" color="secondary" variant="unelevated">
        <Label>Submit</Label>
    </Button>
    </form>
  </Card.Content>
  <Card.Footer>
  </Card.Footer>
</Card.Root>
{/if}