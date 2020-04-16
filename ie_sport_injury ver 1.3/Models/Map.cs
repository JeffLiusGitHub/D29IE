namespace ie_sport_injury_ver_1._3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Map")]
    public partial class Map
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Column(TypeName = "numeric")]
        public decimal Latitude { get; set; }

        [Column(TypeName = "numeric")]
        public decimal Longitude { get; set; }

        [Column(TypeName = "numeric")]
        public decimal PostCode { get; set; }

        [Required]
        public string NodeType { get; set; }

        [Required]
        public string Week { get; set; }

        [Required]
        public string AccidentType { get; set; }

        [Column(TypeName = "timestamp")]
        [MaxLength(8)]
        [Timestamp]
        public byte[] Time { get; set; }

        [Column(TypeName = "numeric")]
        public decimal Month { get; set; }
    }
}
