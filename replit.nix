{ pkgs }: {
  deps = with pkgs; [
    #xdg_utils
    nodejs-18_x
    nodePackages.typescript-language-server
    nodePackages.svelte-language-server
  ];
}