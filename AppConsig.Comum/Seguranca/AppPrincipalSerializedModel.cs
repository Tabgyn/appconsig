﻿namespace AppConsig.Comum.Seguranca
{
    public class AppPrincipalSerializedModel
    {
        public long Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Email { get; set; }
        public bool Admin { get; set; }
    }
}