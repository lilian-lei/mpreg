import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Target, Users, Award, TrendingUp, Shield, Globe } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Active Players", value: "500K+", icon: Users },
    { label: "Games Available", value: "1,200+", icon: TrendingUp },
    { label: "Years of Experience", value: "15+", icon: Award },
    { label: "Countries Served", value: "80+", icon: Globe },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczNjUzMTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Michael Harrison",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1763598461615-610264129bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXVjYXNpYW4lMjBtYW4lMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NzM2OTkyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "David Okonkwo",
      role: "Head of Game Development",
      image: "https://images.unsplash.com/photo-1689857538296-b6e1a392a91d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFuJTIwc29mdHdhcmUlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzczNjk5MjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the safety and security of our players with state-of-the-art encryption and responsible gaming practices.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology and innovative gaming experiences.",
    },
    {
      icon: Users,
      title: "Player-Centric",
      description: "Every decision we make is focused on delivering the best possible experience for our community.",
    },
  ];

  return (
    <div className="h-full overflow-y-auto bg-background relative">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758947112845-596be6bbb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbmlnaHR8ZW58MXx8fHwxNzczNjk5MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Casino building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end">
          <div className="max-w-6xl mx-auto w-full p-8 pb-12">
            <h1 className="text-6xl font-bold mb-4">About MPreg</h1>
            <p className="text-2xl text-muted-foreground max-w-2xl">
              Leading the future of online gaming with innovation, security, and unforgettable experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8 space-y-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-all group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Our Story Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2011, MPreg has grown from a small startup to one of the world's leading online gaming platforms. Our journey began with a simple vision: to create a gaming experience that combines cutting-edge technology with the thrill of traditional casino gaming.
              </p>
              <p>
                Over the years, we've expanded our offerings to include over 1,200 games, serving more than 500,000 active players across 80 countries. Our commitment to innovation has driven us to develop proprietary gaming engines and pioneering features that set industry standards.
              </p>
              <p>
                Today, MPreg stands as a testament to what passion, dedication, and player-first thinking can achieve. We continue to push boundaries, always with our community at the heart of everything we do.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-border">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc3MzY2MDE4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-4xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Office Image */}
        <div className="rounded-xl overflow-hidden border border-border">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MzYyNzExN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern office workspace"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-4xl font-bold mb-8 text-center">Meet Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all group"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-card border border-border rounded-xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            To revolutionize online gaming by creating immersive, fair, and secure experiences that bring joy to players worldwide while setting new standards for innovation and responsible gaming.
          </p>
        </div>
      </div>
    </div>
  );
}