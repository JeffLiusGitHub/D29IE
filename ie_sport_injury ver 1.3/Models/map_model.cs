namespace ie_sport_injury_ver_1._3.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class map_model : DbContext
    {
        public map_model()
            : base("name=map_model")
        {
        }

        public virtual DbSet<Map> Maps { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Map>()
                .Property(e => e.Name)
                .IsUnicode(false);

            modelBuilder.Entity<Map>()
                .Property(e => e.Description)
                .IsUnicode(false);

            modelBuilder.Entity<Map>()
                .Property(e => e.Latitude)
                .HasPrecision(10, 8);

            modelBuilder.Entity<Map>()
                .Property(e => e.Longitude)
                .HasPrecision(11, 8);

            modelBuilder.Entity<Map>()
                .Property(e => e.PostCode)
                .HasPrecision(4, 0);

            modelBuilder.Entity<Map>()
                .Property(e => e.NodeType)
                .IsUnicode(false);

            modelBuilder.Entity<Map>()
                .Property(e => e.Week)
                .IsUnicode(false);

            modelBuilder.Entity<Map>()
                .Property(e => e.AccidentType)
                .IsUnicode(false);

            modelBuilder.Entity<Map>()
                .Property(e => e.Time)
                .IsFixedLength();

            modelBuilder.Entity<Map>()
                .Property(e => e.Month)
                .HasPrecision(18, 0);
        }
    }
}
