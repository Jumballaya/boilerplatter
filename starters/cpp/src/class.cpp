#include "../include/class.h"

Foo::Foo(int i) {
  t = i;
};

void Foo::print() {
  std::cout << "Hello World" << std::endl;
}

void Foo::setName(std::string n) {
  name = n;
}

int Foo::getT() {
  return t;
}
